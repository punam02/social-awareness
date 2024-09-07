from django.urls import path  # type: ignore
from .views import CampaignView 


urlpatterns = [
    path('', CampaignView.as_view())

]
