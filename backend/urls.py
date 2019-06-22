"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include                 
from rest_framework import routers                    
from SkateTracker import views 

router = routers.DefaultRouter()
router.register(r'tricks', views.TrickView, 'SkateTracker')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('', views.TrickView)
]

# NOTE The router class allows us to make the following queries:
    # api/tricks/ - This returns a list of all the Trick items (Create and Read operations can be done here).
    # api/tricks/id - this returns a single Trick item using the id primary key (Update and Delete operations can be done here.
 