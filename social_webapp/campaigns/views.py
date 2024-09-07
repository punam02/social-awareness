from rest_framework import generics
from .serializers import CampaignSerializer
from .models import Campaign, UserCampaign


class CampaignView(generics.ListAPIView):
    queryset = Campaign.objects.all()
    serializer_class = CampaignSerializer


class UserCampaignView(generics.CreateAPIView):
    queryset = UserCampaign.objects.all()
    serializer_class = CampaignSerializer




