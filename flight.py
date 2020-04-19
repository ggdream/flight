# coding=utf-8
# Author: gdream@126.com
import datetime
import requests
from execjs import compile
from prettytable import PrettyTable


class JS:
    def __init__(self):
        with open("token.js", "r") as f:
            J = f.read()

        self.tokenJs = compile(J)

    def CallJs(self, dcode: str, acode: str) -> str:
        return self.tokenJs.call("v", "".join((dcode, acode, "Oneway", "duew&^%5d54nc'KH")))


class Flight(JS):
    def __init__(self):
        super().__init__()

        self.__query_api = "https://flights.ctrip.com/itinerary/api/12808/products"
        self.__city_code = "https://flights.ctrip.com/itinerary/api/13076/getpoicontent?key=%s"
        self.__referer_api = "https://flights.ctrip.com/itinerary/oneway/%s-%s?date=%s"

        self.__headers = {
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36"
        }

    @staticmethod
    def cdate(date: str) -> str:
        return "-".join((date[0:4], date[4:6], date[6:8]))

    def code(self, city: str) -> str:
        return requests.get(self.__city_code % city).json()["data"]["Data"][0]

    def Query(self, date: str, dcity: str, acity: str):
        dd = self.code(dcity)
        aa = self.code(acity)

        data = {"flightWay": "Oneway", "classType": "ALL", "hasChild": 'false', "hasBaby": 'false',
                "searchIndex": 1, "date": self.cdate(date), "airportParams": [
                {"dcity": dd["Code"], "acity": aa["Code"], "dcityname": dcity, "acityname": acity,
                 "date": self.cdate(date), "dcityid": dd["CityId"], "acityid": aa["CityId"]}],
                "token": self.CallJs(dd["Code"].lower(), aa["Code"].lower())}

        self.__headers["Referer"] = self.__referer_api % (dd["Code"].lower(), aa["Code"].lower(), self.cdate(date))
        routeList = requests.post(self.__query_api, headers=self.__headers, json=data).json()["data"]["routeList"]

        for i in routeList:
            yield i["legs"][0]      # 这里刻意封装，将核心数据以生成器形式返回，通过调用这个api方便自定义自己的业务逻辑


def sub(dtime: str, atime: str) -> str:
    ddd = datetime.datetime.strptime(dtime, "%Y-%m-%d %H:%M:%S")
    aaa = datetime.datetime.strptime(atime, "%Y-%m-%d %H:%M:%S")
    return str(ddd - aaa)


def show():
    print("=" * 400)
    ddate = input("请输入出发日期：")
    dcity = input("请输入始发城市：")
    acity = input("请输入抵达城市：")
    print("=" * 400 + "\n")

    table = PrettyTable(["航空公司", "航班编号", "航班路线", "始发时间", "抵达时间", "时间总计", "最低价格"])

    f = Flight()
    for d in f.Query(ddate, dcity, acity):
        flight = d.get("flight")
        if flight is None:
            continue

        table.add_row([
            flight["airlineName"],
            flight["flightNumber"],
            f'{flight["departureAirportInfo"]["airportName"]}{flight["departureAirportInfo"]["terminal"]["name"]} --> {flight["arrivalAirportInfo"]["airportName"]}{flight["arrivalAirportInfo"]["terminal"]["name"]}',
            flight["departureDate"],
            flight["arrivalDate"],
            sub(flight["arrivalDate"], flight["departureDate"]),
            d["characteristic"]["lowestPrice"]
        ])

    print(table)


if __name__ == '__main__':
    show()
