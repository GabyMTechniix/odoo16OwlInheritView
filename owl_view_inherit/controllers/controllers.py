# -*- coding: utf-8 -*-
# from odoo import http


# class OwlViewInherit(http.Controller):
#     @http.route('/owl_view_inherit/owl_view_inherit', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/owl_view_inherit/owl_view_inherit/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('owl_view_inherit.listing', {
#             'root': '/owl_view_inherit/owl_view_inherit',
#             'objects': http.request.env['owl_view_inherit.owl_view_inherit'].search([]),
#         })

#     @http.route('/owl_view_inherit/owl_view_inherit/objects/<model("owl_view_inherit.owl_view_inherit"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('owl_view_inherit.object', {
#             'object': obj
#         })
