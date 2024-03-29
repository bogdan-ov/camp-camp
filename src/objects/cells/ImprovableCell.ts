import Cell from "./Cell";
import Inventory, { ICost } from "../../managers/Inventory";
import Config from "../../utils/Config";
import { OrderType } from "../../managers/orders/Order";
import Particles from "../../managers/particles/Particles";
import CloudParticle from "../particles/CloudParticle";
import LargeCloudParticle from "../particles/LargeCloudParticle";

export default class ImprovableCell extends Cell {
    level: number = 0;
    maxLevels: number = 1;

    allowImproveOrder: boolean = true;
    
    constructor(name: string) {
        super(name);

        this.load();
    }

    upgrade(success: boolean): boolean {
        if (!this.getCanBeUpgraded()) return false;
        
        if (success)
            this.level ++;
        Particles.addParticles(
            ()=> new LargeCloudParticle(),
            ()=> this.getCenter().x + 1,
            ()=> this.getCenter().y + 1,
            4
        );
        
        return true;
    }
    upgradeOrder(): boolean {
        if (!this.getCanBeUpgraded()) return false;
        
        this.replaceOrder(OrderType.UPGRADE);

        return true;
    }

    //
    onOrderDone(order: Order, success: boolean): void {
        super.onOrderDone(order, success);

        if (order.type == OrderType.UPGRADE) {
            this.upgrade(success);
            Inventory.remove(this.getUpgradeCost());
        }
    }
    
    //
    getUpgradeCost(): ICost {
        return {};
    }
    getOrdersMenuTab(menu: OrdersMenu): IMenuButton[] {
        const icon = this.getPreviewIcon();
        
        return [
            { 
                sprite: icon.name,
                spriteSX: icon.sliceX,
                spriteSY: icon.sliceY,
                text: "улучшить",
                onClick: ()=> this.upgradeOrder(),
                visible: ()=> this.getOrderType() == null && this.getCanBeUpgraded(),
                disabled: ()=> !Inventory.canRemove(this.getUpgradeCost()),
                cost: this.getUpgradeCost(),
                blur: true
            },
            { 
                text: "<upgrade>",
                onClick: ()=> this.upgrade(true),
                visible: ()=> Config.IS_DEV && this.getCanBeUpgraded(),
                blur: true
            },
            ...super.getOrdersMenuTab(menu)
        ]
    }
    getCanBeUpgraded(): boolean {
        return !this.getIsMaxLevel() && this.getOrderType() != OrderType.UPGRADE;
    }
    getIsMaxLevel(): boolean {
        return this.level >= this.maxLevels-1
    }
}