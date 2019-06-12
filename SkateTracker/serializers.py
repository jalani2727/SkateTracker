from rest_framework import serializers
from .models import Trick

class TrickSerializer(serializers.ModelSerializer):
    class Meta:
        #   Specify the model you want to work with and the fields that you want to convert to JSON below
        model = Trick
        fields = ('id', 'title', 'description', 'completed')

# NOTE I'm going to need to serialize more tables eventually!


# NOTE I might need to look up proper ways to serialize tables with foreign keys as the application gets more features like users.
