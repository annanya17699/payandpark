from inference_sdk import InferenceHTTPClient

def getPredictions(imageURL):
    CLIENT = InferenceHTTPClient(
        api_url="https://detect.roboflow.com",
        api_key="5mhIEl9IiNAbnEpOkjUJ"
    )

    result = CLIENT.infer(imageURL, model_id="cars---overhead-view/3")
    coordinates = getCoordinates(result)
    return coordinates

def getCoordinates(recRes):
    predictions = []
    for key in recRes:
        if(key == 'predictions'):
            predictions = recRes[key]
            break

    coordinates = []
    for value in predictions:
        x,y,width,height,flag = '','','','',False
        for key in value:
            if(key == 'confidence' and float(value[key]) < 0.7):
                flag = True
                break
            if(key == 'x'):
                x = value[key]
            if(key == 'y'):
                y = value[key]
            if(key == 'width'):
                width = value[key]
            if(key == 'height'):
                height = value[key]
        if(flag==False):
            obj = {
                "x" : x-17,
                "y" : y-30,
                "x1": x-17+width,
                "y1": y-30+height
            }
            coordinates.append(obj)
    return coordinates