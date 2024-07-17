from django.contrib import admin
from .models import Reaction, Post

class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'views', 'userId')
    search_fields = ('title', 'body', 'userId__username')
    list_filter = ('tags', 'userId')

admin.site.register(Reaction)
admin.site.register(Post, PostAdmin)
