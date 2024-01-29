# Generated by Django 5.0 on 2024-01-27 19:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event_planner_api', '0007_alter_user_managers_alter_user_first_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='is_staff',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='user',
            name='is_superuser',
            field=models.BooleanField(default=False),
        ),
    ]
