from django.shortcuts import render


# This is the view that you imported in the ui_frontend/urls.py
def indexView(request, *args, **kwargs):
    return render(request, "ui/public/index.html")
