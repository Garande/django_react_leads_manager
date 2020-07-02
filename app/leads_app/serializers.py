from rest_framework import serializers
from leads_app.models import Lead

#Lead Serializer
class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'#This allows to take all fields within the model however a selective form could be made via fields = (field1, field2, field3, field4)