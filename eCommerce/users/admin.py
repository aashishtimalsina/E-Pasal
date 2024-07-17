from django.contrib import admin
from .models import User, Hair, Address, Bank, Company, Crypto

admin.site.register(User)
admin.site.register(Hair)
admin.site.register(Address)
admin.site.register(Bank)
admin.site.register(Company)
admin.site.register(Crypto)
