from django.urls import path 
from .views import CampaignListView,CampaignCreateView, CampaignListView
from django.conf import settings
from django.conf.urls.static import static
from . import views


urlpatterns = [
   
    path('register', views.UserRegister.as_view(), name='register'),
	path('login', views.UserLogin.as_view(), name='login'),
	path('logout', views.UserLogout.as_view(), name='logout'),
	path('user', views.UserView.as_view(), name='user'),
    
	path('create-campaign/', CampaignCreateView.as_view(), name='create-campaign'),
    path('home/', CampaignListView.as_view(), name='campaigns'),
    path('update/<uuid:pk>/', views.update_campaign, name='update-campaign'),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
