---
draft: false
title: Django Testing con Auth Token
published: 2024-09-23
description: Hacer uso de la autenticación por Token en los test automáticos de Django Rest Framework.
tags: [Django, Test]
category: BackEnd
---

```python
def get_valid_user_token():
	username = 'test'
	password = 'test123'
	user = User.objects.create_user(username=username, password=password)

	# Crear un token para el usuario
	token = Token.objects.create(user=user)
	return token


class UseTestCase(TestCase):
	def setUp(self):
		self.client = APIClient()
		self.token = get_valid_user_token()
		self.client.credentials(HTTP_AUTHORIZATION='Token ' + self.token.key)

		# Resto del test
```
