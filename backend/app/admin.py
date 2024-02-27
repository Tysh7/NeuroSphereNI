# Inside admin.py

from django.contrib import admin
from .models import Article  # Import your Article model

# Register your models here
admin.site.register(Article)
