import os
import resend
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import *

resend.api_key = os.environ.get("RESEND_API_KEY", "")

class ContactView(APIView):
    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            contact = serializer.save()

            try:
                resend.Emails.send({
                    "from": "Kevin Obote <noreply@guild-code.com>",
                    "to": ["obote@guild-code.com"],
                    "reply_to": "obote@guild-code.com",
                    "subject": f"Portfolio Contact: {contact.name}",
                    "html": f"""
                        <h3>New message from your portfolio</h3>
                        <p><strong>Name:</strong> {contact.name}</p>
                        <p><strong>Email:</strong> {contact.email}</p>
                        <p><strong>Message:</strong></p>
                        <p>{contact.message}</p>
                    """,
                })
                return Response(
                    {"message": "Your message has been sent successfully!"},
                    status=status.HTTP_201_CREATED
                )
            except Exception as e:
                print(f"Resend error: {e}")
                return Response(
                    {"error": f"Failed to send email: {str(e)}"},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
