import ProfessionCell from "../../../cells/buildings/professions/ProfessionCell";
import NoneProfession from "../professions/NoneProfession";
import SampleHumanTask, { HumanTaskType } from "./SampleHumanTask";

export default class LearnProfessionTask extends SampleHumanTask {
    constructor(professionCell: ProfessionCell) {
        super(HumanTaskType.LEARN_PROFESSION, 1);

        this.hasDelay = true;
        this.cancelOnFail = true;
        this.targetCell = professionCell;
    }

    executing(human: Human): void {
        super.executing(human);

        if (!human.professions.is(NoneProfession)) {
            human.tasks.doneTask(this, true);
        }
    }
}