## POUR HERITÉ LA VUE DANS ODOO

## Crée un fichier js puis on a besoin d'importer (registry, listView, ListController), voici comment on fait:
    /** @odoo-module */

    import { registry } from '@web/core/registry';
    import { listView } from '@web/views/list/list_view';
    import { ListController } from '@web/views/list/list_controller';


    export class ResPartnerListController extends ListController {
        setup(){
            super.setup();
            console.log(('It working well'));
        }
    }

    export const resPartnerListView = {
        ...listView,
        Controller: ResPartnerListController,
    }

    registry.category('views').add('res_partner_list_view', resPartnerListView)

## Puis hérité la vue list de ce model depuis le fichier /views, voici comment on fait:
    <record id="res_partner_view_inherit" model="ir.ui.view">
        <field name="name">res.partner.view.tree.inherit</field>
        <field name="model">res.partner</field>
        <field name="inherit_id" ref="base.view_partner_tree" />
        <field name="arch" type="xml">
            <xpath expr="//tree" position="attributes">
                <attribute name="js_class">res_partner_list_view</attribute>
            </xpath>
        </field>
    </record>

    > Pour trouver la ref on a besoin d'éditer la vue qu'on veut herité puis copié son ID externe
    > On utilise la position attribute name="js_class"

# Maintenant nous allons ajouter des boutons dans la vue après le bouton Nouveau
    > Pour ça nous allons avoir besoin de d'herité web.ListView.Buttons pour pouvoir y ajouter un nouveau bouton:
        export const resPartnerListView = {
            ...listView,
            Controller: ResPartnerListController,
            buttonTemplate: "owl.RestPartnerListView.Buttons",//add a new button to the button template
        }
        
    > Dans un fichier xml dans le même dossier que le fichier js:
        <?xml version='1.0' encoding='utf-8'?>
        <template id="res_partner_inherit_view_template">
            <t t-name="owl.RestPartnerListView.Buttons" t-inherit="web.ListView.Buttons" owl="1">
                <xpath expr="//t[@t-if='nbTotal and !nbSelected and activeActions.exportXlsx and isExportEnable and !env.isSmall']" position="after">
                    <button class="btn btn-warning">Sale Order</button>
                </xpath>
            </t>
        </template>

# Maintenant nous allons ajouter onClick action pour ouvrir la vue d'un autre model, nous allons devoir importer (useServiec):
    > import { useService } from "@web/core/utils/hooks";

    > Dans notre setup(){*}:
        *on ajoute > this.action = useService("action");

    > Dans notre fonction onClick:
        openSaleView(){
            this.action.doAction({
                type: "ir.actions.act_window",
                name:"Customer Sales",
                res_model:"sale.order",
                views:[[false,"list"],[false,"form"]]
            })
        }
