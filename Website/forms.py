from django import forms
from django.forms import ModelForm
from .models import Image


class ImageForm(forms.ModelForm):
    image = forms.FileField(label='Image file')
    class Meta:
    	model = Image
    	fields = {'image'}