from django.urls import path 
from .views import CampaignView 


urlpatterns = [
    path('home', CampaignView.as_view())

]
