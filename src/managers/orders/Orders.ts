import { Trigger } from "../../engine";

import Pathfinding from "../../utils/Pathfinding";
import Utils from "../../utils/Utils";
import Sounds from "../Sounds";

export enum OrderChangeType {
    ADDED,
    DONE,
    TOOK
} 

export default class Orders {
    static orders: Order[] = [];

    static onChanged = new Trigger<{ order: Order, type: OrderChangeType }>("orders/on-added");
    
    //
    static onCellsChanged() {
        
    }
    
    //
    static addOrder(order: Order): Order {
        order.onAdd();
        
        this.orders.splice(0, 0, order);
        this.onChanged.notify({ order, type: OrderChangeType.ADDED });
        
        return order;
    }
    static sortNearestOrdersTo(x: number, y: number): Order[] {
        return this.orders.sort((a, b)=> a.targetCell.distance(x, y) - b.targetCell.distance(x, y));
    }
    static getSuitableOrder(human: Human): Order | null {
        if (!human.getCanTakeOrders()) return null;
        
        for (const order of this.sortNearestOrdersTo(human.x, human.y)) {
            const targetCellPos = order.targetCell.getNearestPosTo(human.x, human.y);
            const pathToHuman = Pathfinding.findPath(targetCellPos.x, targetCellPos.y, human.x, human.y);
            const special = human.professions.current.onlyCategories.indexOf(order.category) >= 0;

            if (special && pathToHuman.length > 0 && !order.executor) {
                return order;
            }
        }

        return null;
    }
    static takeSuitableOrder(human: Human): Order | null {
        const order = this.getSuitableOrder(human);
        if (!order) return null;
        
        order.onTake(human);
        
        return order;
    }
    static doneOrder(order: Order | null, success: boolean): Order | null {
        const removedOrder = Utils.removeItem(this.orders, order);
        if (!removedOrder || !removedOrder.exists) return null;

        removedOrder.onDone(success);
        
        return removedOrder;
    }
    static cancelOrder(order: Order | null): Order | null {
        const removedOrder = Utils.removeItem(this.orders, order);
        if (!removedOrder || !removedOrder.exists) return null;

        removedOrder.onCancel();

        return removedOrder;
    }
    static cancelAllOrders() {
        for (const order of [...this.orders]) {
            this.cancelOrder(order);
        }
    }

    // Get
    static get count(): number {
        return this.orders.length;
    }
}