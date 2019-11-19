# -*- coding: utf-8 -*-
"""
Django settings for hello project.

Generated by 'django-admin startproject' using Django 1.11.17.

For more information on this file, see
https://docs.djangoproject.com/en/1.11/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.11/ref/settings/
"""

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.11/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '_iwhfi57@g&yy3dyb6^2b2n9^@3mdxholivu&04x(uk!kg#nxk'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

DEBUG_TOOLBAR_PANELS = (
    'debug_toolbar.panels.versions.VersionsPanel',
    'debug_toolbar.panels.timer.TimerPanel',
    'debug_toolbar.panels.settings.SettingsPanel',
    'debug_toolbar.panels.headers.HeadersPanel',
    'debug_toolbar.panels.request.RequestPanel',
    'debug_toolbar.panels.sql.SQLPanel',
    'debug_toolbar.panels.staticfiles.StaticFilesPanel',
    'debug_toolbar.panels.templates.TemplatesPanel',
    'debug_toolbar.panels.cache.CachePanel',
    'debug_toolbar.panels.signals.SignalsPanel',
    'debug_toolbar.panels.logging.LoggingPanel',
    'debug_toolbar.panels.redirects.RedirectsPanel',
)

INTERNAL_IPS = ('127.0.0.1',)



ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'hamlpy',

	'main',
	'django.contrib.admin',
	#'debug_toolbar',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',

##	'debug_toolbar.middleware.DebugToolbarMiddleware',

    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'hello.urls'

TEMPLATE_DIR = os.path.join(BASE_DIR, "templates")

#JUST DEBUG:
TEMPLATE_LOADERS = (
    'hamlpy.template.loaders.HamlPyFilesystemLoader',
    'hamlpy.template.loaders.HamlPyAppDirectoriesLoader',

    'django.template.loaders.filesystem.Loader',
    'django.template.loaders.app_directories.Loader',
)

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [TEMPLATE_DIR,],
##        'APP_DIRS': True,                                                     # JUST DEBUG
        'OPTIONS': {
            'loaders': TEMPLATE_LOADERS,                                        # JUST DEBUG
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
				'django.template.context_processors.media'							#для {{MEDIA_URL}} в шаблонах
            ],
        },
    },
]

WSGI_APPLICATION = 'hello.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.11/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}


# Password validation
# https://docs.djangoproject.com/en/1.11/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'main.validators.password.CustomLengthValidator',
        'OPTIONS': {
            'min_length': 7,
        }
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'main.validators.password.CustomNumericValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/1.11/topics/i18n/

#LOCALE_PATHS = (os.path.join(BASE_DIR, 'translations'),)			#?

LANGUAGE_CODE = 'ru'         	# 'en-us'

TIME_ZONE = 'Europe/Moscow' 	#'UTC' +3

USE_I18N = True					# опция перевода включить/выключить

USE_L10N = True                 # управление локализацией времени

USE_TZ = True					# использвание timezone


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.11/howto/static-files/

LOGIN_URL = '/signin/'

STATIC_URL = '/static/'

MEDIA_ROOT = 'media/' 			          # путь к медиа. Любопытно, что будет, если: os.path.join(BASE_DIR, 'media') либо добавить слэш

MEDIA_URL = '/images/' 					  # ссылка к пути к медиа

AUTH_USER_MODEL = 'main.Profile'



# my settings:

SITE_PROTOCOL = 'http://'

SITE_URL = SITE_PROTOCOL + '127.0.0.1:8000' + '/'

#вопрос решился, но на всяк случай:

#if DEBUG: MEDIA_URL = ':8000/images/'