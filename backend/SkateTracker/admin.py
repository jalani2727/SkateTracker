from django.contrib import admin
from .models import Tricks
# Remember to import any other models you want to manage once you get through the walkthrough

class SkateTrackerAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

# Register your models here.
admin.site.register(Tricks, SkateTrackerAdmin)
