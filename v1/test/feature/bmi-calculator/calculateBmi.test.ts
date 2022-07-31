import chai, { expect } from "chai"

import { Done } from "mocha"
import chaiHttp from "chai-http"
import server from "../../../../index"

chai.use(chaiHttp)

describe("Calculate BMI API", () => {
    it("Should calculate BMI (Metric)", (done: Done) => {
        chai.request(server)
            .post(`/api/v1/bmi`)
            .send({
                measurementUnit: "METRIC",
                height: 160,
                weight: 95,
            })
            .end((err, res) => {
                expect(res.status).to.be.equal(200)
                expect(res.body.bmi).to.be.equal(37.1)
                expect(res.body.classification).to.be.equal("Obese Class 2")

                done()
            })
    })

    it("Should calculate BMI (Standard)", (done: Done) => {
        chai.request(server)
            .post(`/api/v1/bmi`)
            .send({
                measurementUnit: "STANDARD",
                height: 5,
                heightSecondary: 3,
                weight: 209.439,
            })
            .end((err, res) => {
                expect(res.status).to.be.equal(200)
                expect(res.body.bmi).to.be.equal(37.1)
                expect(res.body.classification).to.be.equal("Obese Class 2")

                done()
            })
    })

    it("Should not calculate BMI because of missing required fields", (done: Done) => {
        chai.request(server)
            .post(`/api/v1/bmi`)
            .send({})
            .end((err, res) => {
                expect(res.status).to.be.equal(400)
                expect(res.body).to.have.all.keys([
                    "measurementUnit",
                    "height",
                    "weight",
                ])

                done()
            })
    })

    it("Should not calculate BMI because height secondary is missing when using STANDARD measurement unit", (done: Done) => {
        chai.request(server)
            .post(`/api/v1/bmi`)
            .send({
                measurementUnit: "STANDARD",
                height: 5,
                weight: 209.439,
            })
            .end((err, res) => {
                expect(res.status).to.be.equal(400)
                expect(res.body).to.have.all.keys([
                    "heightSecondary",
                ])

                done()
            })
    })

    it("Should not calculate BMI because height secondary is above 11 inches", (done: Done) => {
        chai.request(server)
            .post(`/api/v1/bmi`)
            .send({
                measurementUnit: "STANDARD",
                height: 5,
                heightSecondary: 12,
                weight: 209.439,
            })
            .end((err, res) => {
                expect(res.status).to.be.equal(400)
                expect(res.body).to.have.all.keys([
                    "heightSecondary",
                ])

                done()
            })
    })
})
