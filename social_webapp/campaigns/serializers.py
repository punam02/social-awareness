from rest_framework import serializers
from .models import Campaign, UserCampaign


class CampaignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Campaign
        fields = '__all__'



class UserCampaignSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserCampaign
        fields = '__all__'  # '__all__' means all fields in the model