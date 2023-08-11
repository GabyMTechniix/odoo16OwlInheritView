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
        Controller: ListController,
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