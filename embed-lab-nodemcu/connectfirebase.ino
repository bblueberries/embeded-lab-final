#include <ESP8266WiFi.h>
#include <Firebase_ESP_Client.h>
#include "addons/TokenHelper.h"
#include "addons/RTDBHelper.h"

const char* ssid = "September";
const char* password = "14235678";
const int redLedPin = D1;

const char* api_key = "AIzaSyCK7lbb0d6AWORPrd7JBPqyt4OLwaiEOJY";
const char* db_url = "https://embed-lab-final-default-rtdb.asia-southeast1.firebasedatabase.app/";

FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

bool signupOK = false;
bool ledstatus = false;
unsigned long sendDataPrevMillis = 0;


void setup() {
  pinMode(redLedPin, OUTPUT);
  Serial.begin(115200);

  // Connect to Wi-Fi
  WiFi.begin(ssid, password);
  Serial.print("Connecting to Wifi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nConnected to WiFi");

  Serial.print("IP: ");
  Serial.print(WiFi.localIP());
  Serial.print("");

  config.api_key = api_key;
  config.database_url = db_url;
  if (Firebase.signUp(&config, &auth, "", "")) {
    Serial.print("sign up ok");
    signupOK = true;
  } else {
    Serial.print(config.signer.signupError.message.c_str());
  }

  config.token_status_callback = tokenStatusCallback;
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
}
float i = 0;
void loop() {
  if (Firebase.ready() && signupOK && (millis() - sendDataPrevMillis > 2000 || sendDataPrevMillis == 0)) {
    sendDataPrevMillis = millis();
    i += 1;
    if (Firebase.RTDB.setFloat(&fbdo, "/sensor", i)) {
      Serial.print("Write on Fire base : ");
      Serial.print(i);
      Serial.print("\n");
    } else {
      Serial.print("FAILED: " + fbdo.errorReason());
    }

  }
}