import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import twilio from "twilio";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_PHONE_NUMBER;
const primaryPhone = process.env.PRIMARY_PHONE_NUMBER || "+525531911258";
const secondaryPhone = process.env.SECONDARY_PHONE_NUMBER || "+525539054579";

if (!accountSid || !authToken || !twilioPhone) {
  console.warn("WARNING: Twilio environment variables are not fully configured.");
}

const client = twilio(accountSid, authToken);

app.post("/api/send-sms", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ error: "Faltan datos obligatorios." });
  }

  if (!accountSid || !authToken || !twilioPhone) {
    return res.status(500).json({ error: "Servicio de SMS no configurado." });
  }

  const smsBody = `Nuevo mensaje de ${name}${email ? ` (${email})` : ""}: ${message}`;
  const phones = [primaryPhone, secondaryPhone];

  try {
    await Promise.all(
      phones.map((phone) =>
        client.messages.create({
          from: twilioPhone,
          to: phone,
          body: smsBody,
        })
      )
    );

    return res.json({ success: true });
  } catch (error) {
    console.error("Twilio SMS error:", error);
    return res.status(500).json({ error: "No se pudo enviar el SMS." });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`SMS backend escuchando en http://localhost:${port}`);
});
