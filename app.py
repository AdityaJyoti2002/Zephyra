from flask import Flask, render_template, request, jsonify
import random
import json
import pickle
import numpy as np
import nltk
from nltk.stem import WordNetLemmatizer
from keras.models import load_model

app = Flask(__name__)

# Initialize lemmatizer
lemmatizer = WordNetLemmatizer()

# Load intents and pre-trained model
try:
    intents = json.loads(open(r'C:\Users\aditya\Desktop\ChatBot using Python\chatbot\intents.json').read())
    words = pickle.load(open('words.pkl', 'rb'))
    classes = pickle.load(open('classes.pkl', 'rb'))
    model = load_model('chatbot_model.h5')
except FileNotFoundError as e:
    print(f"Error: Missing file {e.filename}. Ensure all required files are present.")
    exit()

def clean_up_sentence(sentence):
    sentence_words = nltk.word_tokenize(sentence.lower())
    sentence_words = [lemmatizer.lemmatize(word) for word in sentence_words]
    return sentence_words

def bag_of_words(sentence):
    sentence_words = clean_up_sentence(sentence)
    bag = [0] * len(words)
    for w in sentence_words:
        for i, word in enumerate(words):
            if word == w:
                bag[i] = 1
    return np.array(bag)

def predict_class(sentence):
    bow = bag_of_words(sentence)
    res = model.predict(np.array([bow]))[0]

    ERROR_THRESHOLD = 0.25
    results = [[i, r] for i, r in enumerate(res) if r > ERROR_THRESHOLD]

    results.sort(key=lambda x: x[1], reverse=True)
    return [{'intent': classes[r[0]], 'probability': str(r[1])} for r in results]

def get_response(intents_list, intents_json):
    if not intents_list:
        return "Sorry, I didn't understand that. Can you please rephrase?"

    tag = intents_list[0]['intent']
    for intent in intents_json['intents']:
        if intent['tag'] == tag:
            return random.choice(intent['responses'])

    return "Sorry, I couldn't process that request."

# Main page route
@app.route('/chat', methods=['GET', 'POST'])
def chat():
    if request.method == 'POST':
        user_input = request.form.get('msg')  # Get the user message from the form
        predicted_intents = predict_class(user_input)
        bot_response = get_response(predicted_intents, intents)
        return jsonify({'response': bot_response})
    
    # On GET request, render page with a default bot greeting
    return render_template('index.html', bot_response="Hello, how can I help you today?")

if __name__ == '__main__':
    app.run(debug=True)