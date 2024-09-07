
import uuid
from django.db import models
from django.contrib.auth.models import User



class Campaign(models.Model):
    """
    Model to store information about campaigns.
    Each campaign is created by a user (creator).
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, help_text="Unique ID for this campaign")
    title = models.CharField(max_length=255, help_text="Title of the campaign")
    main_image = models.ImageField(upload_to='campaign_images/', null=True, blank=True, help_text="Main image for the campaign") 
    description = models.TextField(help_text="Detailed description of the campaign")
    start_date = models.DateField(help_text="Date when the campaign starts")
    end_date = models.DateField(help_text="Date when the campaign ends")

    # possible status choices
    STATUS_CHOICES = [
        ('active', 'Active'),
        ('completed', 'Completed'),
        ('pending', 'Pending'),
        ('cancelled', 'Cancelled'),
    ]
    status = models.CharField(
        max_length=50,
        choices=STATUS_CHOICES,
        default='pending',
        help_text="Current status of the campaign"
    )
    creator = models.ForeignKey(User, on_delete=models.RESTRICT, null=True, help_text="User who created the campaign", related_name='campaigns')

    def __str__(self):
        return self.title



class UserCampaign(models.Model):
    """
    Model to store user participation in campaigns.
    Each record represents a user's involvement in a specific campaign.
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, help_text="Unique ID for this user-campaign relationship")
    user = models.ForeignKey(User, on_delete=models.RESTRICT, null=True, help_text="User participating in the campaign", related_name='user_campaigns')
    campaign = models.ForeignKey(Campaign, on_delete=models.CASCADE, null=True, help_text="Campaign that the user is participating in", related_name='user_campaigns')
    participation_date = models.DateTimeField(auto_now_add=True, help_text="Date and time when the user joined the campaign")
    role = models.CharField(max_length=100, help_text="Role of the user in the campaign (e.g., participant, organizer)")

    def __str__(self):
        return f"{self.user.username} - {self.campaign.title} ({self.role})"
