# Generated by Django 2.2.2 on 2019-06-04 18:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('SkateTracker', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Tricks',
            new_name='Trick',
        ),
    ]