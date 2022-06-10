import { Selector, t } from "testcafe"

class TaskPage{
    constructor(){
        this.title = Selector('.simple_content').withExactText('Today')
        this.plusAddButton = Selector('#quick_add_task_holder')
        this.addTaskHeader = Selector('div.DraftEditor-editorContainer > div')
        this.addTaskDescription = Selector ('.f9408a0e')
        this.AddTaskButton = Selector ('._7a2031d6.a878a9a4')//.withAttribute('task-editor-submit-button')
       // this.taskInboxLabel = Selector ('.AuiqUdaGFITJcNpaWKvZFA==')
    }

    async createTask(numberoftasks){
        for(var i = 1; i <= numberoftasks; i++){
            await t
                .wait(1000)
                .click(this.plusAddButton)
                .wait(1000)
                .typeText(this.addTaskHeader,'Task'+i)
                .wait(1000)
                .click(this.AddTaskButton)
                .wait(1000)
            }  
    }
  
}


export default new TaskPage