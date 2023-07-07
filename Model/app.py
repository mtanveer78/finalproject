from flask import Flask, request
from transformers import pipeline
from flask_cors import CORS

app = Flask(__name__)
from transformers import AutoTokenizer, AutoModelForSequenceClassification

CORS(app)
LOCATION="./model/"
tokenizer = AutoTokenizer.from_pretrained("LiYuan/amazon-review-sentiment-analysis", cache_dir=LOCATION)
model = AutoModelForSequenceClassification.from_pretrained("LiYuan/amazon-review-sentiment-analysis", cache_dir=LOCATION)

@app.route('/')
def home():
    return "Hello world!"

@app.route('/predict',methods=['POST'])
def predict():
    
    data = request.json
    print(data)
    text_classification = pipeline("text-classification", model=model, tokenizer=tokenizer)
    output = text_classification(data.get('review'),max_length=146)
    star = int(output[0]['label'].split(' ')[0])
    prob = output[0]['score']
    review_type = ''
    if(star==4 or star==5):
        review_type = '1'
    elif(star==1 or star==2):
          review_type = '0'
    else:
        if(prob>0.50):
            review_type = '1'
        else:
            review_type = '0'

    return review_type
        

if __name__ == "__main__":
    app.run(debug=True)