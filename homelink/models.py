from django.db import models

class Categorias(models.Model):
    nome = models.CharField(max_length=50)
    
    def __str__(self) -> str:
        return self.nome

class Links(models.Model):
    nome = models.CharField(max_length=30)
    descricao = models.TextField()
    links = models.URLField()
    categoria = models.ForeignKey(Categorias, on_delete=models.CASCADE )
    
    def __str__ (self):
        return self.nome
    
