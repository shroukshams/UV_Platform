from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route('/analyze-cv', methods=['POST'])
def analyze_cv():
    data = request.json or {}
    return jsonify({
        "status": "Success",
        "score": 85,
        "candidate": data.get('name', 'Unknown'),
        "engine": "VU AI contextual-v1"
    })

if __name__ == '__main__':
    # مهم جداً: الاستماع على 0.0.0.0 للعمل داخل Docker
    app.run(host='0.0.0.0', port=5000)
