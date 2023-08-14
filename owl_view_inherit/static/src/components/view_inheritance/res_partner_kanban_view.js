/** @odoo-module **/
import { KanbanController } from "@web/views/kanban/kanban_controller";
import { kanbanView } from "@web/views/kanban/kanban_view";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { onWillStart } from "@odoo/owl";

class ResPartnerKanbanController extends KanbanController{
    setup(){
        super.setup();
        console.log("The kanban is runing");
        this.action = useService("action");

        this.orm = useService("orm")
        onWillStart(async ()=>{
            this.customerLocations = await this.orm.readGroup("res.partner", [], ['state_id'], ['state_id'])
            console.log(this.customerLocations);
        })
    }

    actionNothing(){
        const notification = this.env.services.notification;

        notification.add("Pour action l'action il te faut remplir this.action.doAction",{
            type : "info",
            title : "Pas encore d'action",
            className : "m-5"
        })
    }
    openAccountMove(){
        const notification = this.env.services.notification;

        notification.add("OK",{
            type : "success",
            title : "Action",
            className : "m-5"
        })

        //lancer l'action**(activé l'action**)
        this.action.doAction({
            type: "ir.actions.act_window",
            name:"Account Move",
            res_model:"account.move",
            views:[[false,"list"],[false,"form"]]
        })
        //lancer l'action**(activé l'action**)
    }

    openSaleView(){
        const notification = this.env.services.notification;

        notification.add("OK",{
            type : "success",
            title : "Action",
            className : "m-5"
        })

        //lancer l'action**(activé l'action**)
        this.action.doAction({
            type: "ir.actions.act_window",
            name:"Customer Sales",
            res_model:"sale.order",
            views:[[false,"list"],[false,"form"]]
        })
        //lancer l'action**(activé l'action**)
    }
}

ResPartnerKanbanController.template = "owl.RespartnerKanbanTemplate"; //adding a new template view for the side bar

export const resPartnerKanbanView = {
    ...kanbanView,
    Controller: ResPartnerKanbanController,
    buttonTemplate: "owl.RestPartnerKanbanView.Buttons",//add a new button to the button template
}

registry.category('views').add('res_partner_kanban_view_inherit', resPartnerKanbanView)