# -*- coding: utf-8 -*-
{
    'name': "owl_view_inherit",

    'summary': "",

    'description': """
    """,

    'author': "MTechniix",
    'website': "https://www.mtechniix.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/16.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base','web'],

    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        'views/views.xml',
        'views/templates.xml',
        'views/res_partner.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
    'installable': True,
    'application': True,
    'assets':{
        'web.assets_backend':[
            'owl_view_inherit/static/src/components/*/*.js',
            'owl_view_inherit/static/src/components/*/*.xml',
            'owl_view_inherit/static/src/components/*/*.css',
        ]
    }
}
