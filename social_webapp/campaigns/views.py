from rest_framework import generics
from .serializers import CampaignSerializer
from .models import Campaign


class CampaignView(generics.ListAPIView):
    queryset = Campaign.objects.all()
    serializer_class = CampaignSerializer







