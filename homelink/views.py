from django.shortcuts import render, redirect, get_object_or_404
from .models import Links, Categorias
from django.http import HttpResponse


def home(request):
    if request.method == "GET":
        link_user = Links.objects.all()
        categorias = Categorias.objects.all()
        
        return render(request, 'index.html', {'link': link_user, 'categorias': categorias})

def pegar_dados(request):
    if request.method == "POST":
        nome = request.POST.get('name')
        descricao = request.POST.get('description')
        link = request.POST.get('link')
        categoria_id = request.POST.get('categorias')
        
        categoria = get_object_or_404(Categorias, pk=categoria_id)

        
        link_usuario = Links(
            nome = nome,
            descricao = descricao,
            links = link,
            categoria = categoria
        )
        link_usuario.save()
        return redirect('/')

def info(request, id_name):
    link_user = Links.objects.all()
    categorias = Categorias.objects.all()
    link = Links.objects.filter(id=id_name)
    
    return render(request, 'index.html', {'link': link_user, 'categorias': categorias, 'infos': link})

    