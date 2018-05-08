# -*- coding: utf-8 -*-
from form_keys import *
from form_test import CreateForm
 
# Declaro mensajes a repetirse
MESSAGE_REQUIRED = u'Este campo es requerido.'
MESSAGE_MAX = u'La longitud máxima es de %d caracteres.'
MESSAGE_MIN = u'La longitud mínima es de %d caracteres.'
MESSAGE_ONLY_NUMBERS = u'Ingrese solo números.'
MESSAGE_BAD_NAME = u'Solo letras, espacios y guiones (-)'
 
# Registramos los valores por defecto que tendra el formulario, cuando el campo sea un select le asignamos un diccionario como valor
default = dict()
default[FIELD_NAME] = 'Nombre de Prueba'
default[FIELD_LASTNAME] = 'Apellido de prueba'
default[FIELD_EMAIL] = 'correo@demo.com'
default[FIELD_PASSWORD] = 'probando123'
default[FIELD_CONFIRM] = 'probando123'
default[FIELD_DOCUMENT] = {'DNI':'54264895','RUC':'254152458963','Pasaporte':'4587DA45','Carné de Extranjería':'584E4E5D5'}
 
# Declaramos los errores
# item : campo a ser testeado
# message : el mensaje de error que deberia mostrar
# value : el valor erroneo a ser ingresado
txtNameBadSpell = {'item': FIELD_NAME, 'message': MESSAGE_BAD_NAME, 'value': u'FULAN0000'}
txtNameMinCharacters = {'item': FIELD_NAME, 'message': MESSAGE_MIN % 2, 'value': 'C'}
txtNameRequired = {'item': FIELD_NAME, 'message': MESSAGE_REQUIRED, 'value': ''}
 
txtLastNameBadSpell = {'item': FIELD_LASTNAME, 'message': MESSAGE_BAD_NAME, 'value': u'PEP3$$$$'}
txtLastNameMinCharacters = {'item': FIELD_LASTNAME, 'message': MESSAGE_MIN % 2, 'value': 'C'}
txtLastNameRequired = {'item': FIELD_LASTNAME, 'message': MESSAGE_REQUIRED, 'value': ''}
 
txtEmailBadSpell = {'item': FIELD_EMAIL, 'message': u'Ingrese un email válido.', 'value': u'demo.pe'}
txtEmailRequired = {'item': FIELD_EMAIL, 'message': MESSAGE_REQUIRED, 'value': u''}
 
txtDocumentDniMin = {'item': FIELD_DOCUMENT, 'message': u'El DNI debe ser de 8 dígitos', 'value':{'DNI': '21587'} }
txtDocumentRucMin = {'item': FIELD_DOCUMENT, 'message': u'El RUC debe ser de 11 dígitos', 'value': {'RUC': '12857'} }
 
# Registramos los errores
register = CreateForm(default)
register.addError(**txtNameBadSpell)
register.addError(**txtNameMinCharacters)
register.addError(**txtNameRequired)
register.addError(**txtLastNameBadSpell)
register.addError(**txtLastNameMinCharacters)
register.addError(**txtLastNameRequired)
register.addError(**txtEmailBadSpell)
register.addError(**txtEmailRequired)
register.addError(**txtDocumentDniMin)
register.addError(**txtDocumentRucMin)