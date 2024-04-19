from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import create_access_token, jwt_required, JWTManager, get_jwt
from datetime import timedelta

app=Flask(__name__)
CORS(app, origins='http://localhost:5173')
app.config["JWT_SECRET_KEY"]="supersecretkey"
jwt=JWTManager(app)



def get_info(token):
    return (token["user_type"], token["sub"])


student_email_from_db="student@gmail.com"
student_password_from_db="password"
student_from_db_name="stuname"


@app.route('/student_login',methods=["POST"])
def student_login():
    data=request.get_json()
    email=data["student_email"]
    password=data["student_password"]
    if email==student_email_from_db:
            if password==student_password_from_db:
                expiration_time = timedelta(hours=3)
                access_token={"access_token":create_access_token(identity=email, additional_claims={"user_type":"student"}, expires_delta=expiration_time), 'name':student_from_db_name}
                return jsonify(access_token), 200
            return {"Unauthorized":"Wrong Password"}, 401
    return {"Unauthorized":"User does not exist"}, 401

@app.route("/student_register", methods=["POST"])
def student_register():
    data=request.get_json()
    email=data["student_email"]
    name=data["student_name"]
    password=data["student_password"]
    if student_email_from_db==email:
        return {"error":"student already exists"}, 422
    else:
        # db.session.add(User(user_name=name, user_email=email, user_password=password, user_login_date=str(datetime.datetime.today().date())))
        # db.session.commit()
        expiration_time = timedelta(hours=3)
        access_token={"access_token":create_access_token(identity=email, additional_claims={"user_type":"student"}, expires_delta=expiration_time), "name":name}
        return jsonify(access_token), 200










admin_email_from_db="admin@gmail.com"
admin_password_from_db="password"
admin_from_db_name="adminname"
@app.route('/admin_login',methods=["POST"])
def admin_login():
    data=request.get_json()
    email=data["admin_email"]
    password=data["admin_password"]
    if email==admin_email_from_db:
            if password==admin_password_from_db:
                expiration_time = timedelta(hours=3)
                access_token={"access_token":create_access_token(identity=email, additional_claims={"user_type":"admin"}, expires_delta=expiration_time), 'name':admin_from_db_name}
                return jsonify(access_token), 200
            return {"Unauthorized":"Wrong Password"}, 401
    return {"Unauthorized":"User does not exist"}, 401




@app.route("/get_questions", methods=["GET"])
@jwt_required()
def get_questions():
    type, logged_libr=get_info(get_jwt())
    if type!="admin":
        return jsonify({"error":"Login as admin to access this"}), 401
    return {"questions":[
        {"question_id":1,"question":"what is machine learning"},
        {"question_id":2,"question":"what is launch control"},
        {"question_id":3,"question":"what is artificial intelligence"}
        ]}, 200

@app.route("/check", methods=["POST"])
@jwt_required()
def check_answer():
    data=request.get_json()
    question_id=data["question_id"]
    student_answer=data["student_answer"]
    return {"score":100}, 200

@app.route("/model_answer", methods=["POST"])
@jwt_required()
def model_answer():
    type, logged_libr=get_info(get_jwt())
    if type!="admin":
        return jsonify({"error":"Login as admin to access this"}), 401
    data=request.get_json()
    model_answer=data["model_answer"]
    question=data["question"]
    return {"message":"OK"}, 200



if __name__=="__main__":
    app.run(port=8080, debug=True, host="localhost")