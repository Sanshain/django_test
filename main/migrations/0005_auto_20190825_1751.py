# -*- coding: utf-8 -*-
# Generated by Django 1.11.17 on 2019-08-25 13:51
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_life_confidence'),
    ]

    operations = [
        migrations.AlterField(
            model_name='life',
            name='Confidence',
            field=models.CharField(default='friendship', max_length=50),
        ),
    ]
