from django.urls import path
from .views import *

urlpatterns = [
    path('', FileUploadView.as_view()),
    path('delimeter/', FileDelimeterView.as_view()),
    path('url/', uploadViaUrl.as_view())
]
