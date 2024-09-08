from django.urls import path 
from .views import CampaignView
from . import views


urlpatterns = [
    path('home', CampaignView.as_view()),
    path('register', views.UserRegister.as_view(), name='register'),
	path('login', views.UserLogin.as_view(), name='login'),
	path('logout', views.UserLogout.as_view(), name='logout'),
	path('user', views.UserView.as_view(), name='user'),

]
