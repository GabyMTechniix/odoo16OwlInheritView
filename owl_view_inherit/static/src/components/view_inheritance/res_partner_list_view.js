/** @odoo-module */

import { registry } from '@web/core/registry';
import { listView } from '@web/views/list/list_view';
import { ListController } from '@web/views/list/list_controller';
import { useService } from "@web/core/utils/hooks";


export class ResPartnerListController extends ListController {
    setup(){
        super.setup();
        console.log("List view");

        this.action = useService("action")//activé l'action**
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

export const resPartnerListView = {
    ...listView,
    Controller: ResPartnerListController,
    buttonTemplate: "owl.RestPartnerListView.Buttons",//add a new button to the button template
}

registry.category('views').add('res_partner_list_view_inherit', resPartnerListView)