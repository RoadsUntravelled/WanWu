# Generated by Django 2.2a1 on 2019-03-08 09:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0005_auto_20190128_0621'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userprofile',
            old_name='user_id',
            new_name='user',
        ),
    ]
