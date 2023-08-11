/** @odoo-module */

import { registry } from '@web/core/registry';
import { listView } from '@web/views/list/list_view';
import { ListController } from '@web/views/list/list_controller';
import { useService } from "@web/core/utils/hooks";


export class ResPartnerListController extends ListController {
    setup(){
        super.setup();
        console.log("Exelent work");

        this.action = useService("action")
    }

    openSaleView(){
        const notification = this.env.services.notification;

        notification.add("OK",{
            type : "info",
            title : "Action",
            className : "m-5"
        })

        this.action.doAction({
            type: "ir.actions.act_window",
            name:"Customer Sales",
            res_model:"sale.order",
            views:[[false,"list"],[false,"form"]]
        })
    }
}

export const resPartnerListView = {
    ...listView,
    Controller: ResPartnerListController,
    buttonTemplate: "owl.RestPartnerListView.Buttons",//add a new button to the button template
}

registry.category('views').add('res_partner_list_view', resPartnerListView)