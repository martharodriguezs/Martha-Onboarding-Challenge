import { Selector, t } from "testcafe"

class TaskPage {
    constructor() {
        this.title = Selector('.simple_content').withExactText('Today')
        this.plusAddButton = Selector('#quick_add_task_holder')
        this.addTaskHeader = Selector('div.DraftEditor-editorContainer > div')
        this.addTaskDescription = Selector('.f9408a0e')
        this.addTaskButton = Selector('._7a2031d6.a878a9a4')
        this.taskName = Selector('.markdown_content.task_content')
    }

    async createSingleTask() {
        await t
            .wait(100)
            .click(this.plusAddButton)
            .wait(100)
            .typeText(this.addTaskHeader, 'SingleTask')
            .wait(100)
            .click(this.addTaskButton)
            .wait(500)
            .expect(this.taskName.withText('SingleTask').exists).ok()
    }

    async createTask(numberoftasks) {
        for (let i = 1; i <= numberoftasks; i++) {
            await t
                .wait(100)
                .click(this.plusAddButton)
                .wait(100)
                .typeText(this.addTaskHeader, `Task${i}`)
                .wait(100)
                .click(this.addTaskButton)
                .wait(100)
                .expect(this.taskName.withText(`Task${i}`).exists).ok()
        }  
    }
}


export default new TaskPage