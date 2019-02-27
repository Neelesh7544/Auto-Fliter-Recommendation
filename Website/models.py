# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models

# Create your views here.

class Image(models.Model):
	image = models.FileField(upload_to='')

	def __str__(self):
		return str(self.pk)

class Filters(models.Model):
	name = models.CharField(max_length=100)
	number = models.IntegerField()
	likes = models.IntegerField()

	def __str__(self):
		return str(self.name)