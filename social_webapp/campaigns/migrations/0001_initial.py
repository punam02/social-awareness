# Generated by Django 5.1.1 on 2024-09-07 20:05

import django.db.models.deletion
import uuid
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Campaign',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, help_text='Unique ID for this campaign', primary_key=True, serialize=False)),
                ('title', models.CharField(help_text='Title of the campaign', max_length=255)),
                ('main_image', models.ImageField(blank=True, help_text='Main image for the campaign', null=True, upload_to='campaign_images/')),
                ('description', models.TextField(help_text='Detailed description of the campaign')),
                ('start_date', models.DateField(help_text='Date when the campaign starts')),
                ('end_date', models.DateField(help_text='Date when the campaign ends')),
                ('status', models.CharField(choices=[('active', 'Active'), ('completed', 'Completed'), ('pending', 'Pending'), ('cancelled', 'Cancelled')], default='pending', help_text='Current status of the campaign', max_length=50)),
                ('creator', models.ForeignKey(help_text='User who created the campaign', null=True, on_delete=django.db.models.deletion.RESTRICT, related_name='campaigns', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='UserCampaign',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, help_text='Unique ID for this user-campaign relationship', primary_key=True, serialize=False)),
                ('participation_date', models.DateTimeField(auto_now_add=True, help_text='Date and time when the user joined the campaign')),
                ('role', models.CharField(help_text='Role of the user in the campaign (e.g., participant, organizer)', max_length=100)),
                ('campaign', models.ForeignKey(help_text='Campaign that the user is participating in', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user_campaigns', to='campaigns.campaign')),
                ('user', models.ForeignKey(help_text='User participating in the campaign', null=True, on_delete=django.db.models.deletion.RESTRICT, related_name='user_campaigns', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
