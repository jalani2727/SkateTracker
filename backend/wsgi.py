"""
WSGI config for backend project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

application = get_wsgi_application()


# The latest version of WhiteNoise removes some options which were deprecated in the previous major release:
# The WSGI integration option for Django (which involved editing wsgi.py) has been removed. Instead, you should add WhiteNoise to your middleware list in settings.py and remove any reference to WhiteNoise from wsgi.py. See the documentation for more details. 
# (The pure WSGI integration is still available for non-Django apps.)
# The whitenoise.django.GzipManifestStaticFilesStorage alias has now been removed. Instead you should use the correct import path: whitenoise.storage.CompressedManifestStaticFilesStorage.
# If you are not using either of these integration options you should have no issues upgrading to the latest version.
