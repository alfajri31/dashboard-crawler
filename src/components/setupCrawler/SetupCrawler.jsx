export function SetupCrawler() {
    return(
        <>
            <div className={"mb-5 mt-2"}>
                <h1>Setup Crawler</h1>
            </div>
            <form>
                <div className={"form-group row"}>
                    <label className={"col-sm-2 col-form-label"}>Target URL</label>
                    <div className={"col-sm-10"}>
                        <input className={"form-control"}/>
                    </div>
                </div>
                <div className={"form-group row"}>
                    <label className={"col-sm-2 col-form-label"}>Selector</label>
                    <div className={"col-sm-9"}>
                        <input className={"form-control"}/>
                    </div>
                    <div className={"col-sm-1"}>
                        <div> + </div>
                    </div>
                </div>
                <div className={"form-group row mt-5 text-center"}>
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </>
    )
}
