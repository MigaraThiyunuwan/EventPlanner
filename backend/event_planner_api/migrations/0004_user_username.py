# Generated by Django 5.0 on 2024-01-27 12:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event_planner_api', '0003_remove_user_username'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='username',
            field=models.CharField(blank=True, max_length=130, null=True),
        ),
    ]
